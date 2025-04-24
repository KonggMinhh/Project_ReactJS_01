import { CartProductType } from "@/app/product/[productId]/ProductDetails";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
type CartContextType = {
    cartTotalQty: number;
    cartProducts: CartProductType[] | null;
    handleAddProductToCart: (product: CartProductType) => void;
    handleRemoveCartProductFromCart: (product: CartProductType) => void;
    handleCartQtyIncrease: (product: CartProductType) => void;
    handleCartQtyDecrease: (product: CartProductType) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
    [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
    const [cartTotalQty, setCartTotalQty] = useState(0);
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
        null
    );
    useEffect(() => {
        const cartItems: any = localStorage.getItem("samCartItems");
        const cProducts: CartProductType[] | null = JSON.parse(cartItems);
        setCartProducts(cProducts);
    }, []);
    const handleAddProductToCart = useCallback((product: CartProductType) => {
        setCartProducts((prev) => {
            let updateCart;
            if (prev) {
                updateCart = [...prev, product];
            } else {
                updateCart = [product];
            }
            localStorage.setItem("samCartItems", JSON.stringify(updateCart));
            return updateCart;
        });
    }, []);
    const handleRemoveCartProductFromCart = useCallback(
        (product: CartContextType) => {
            if (cartProducts) {
                const filterProducts = cartProducts.filter((item) => {
                    return item.id !== product.id;
                });
                setCartProducts(filterProducts);
                localStorage.setItem(
                    "samCartItems",
                    JSON.stringify(filterProducts)
                );
            }
        },
        [cartProducts]
    );

    const handleCartQtyIncrease = useCallback(
        (product: CartContextType) => {
            if (product.quantity === 99) {
                return;
            }

            if (cartProducts) {
                const updateCart = [...cartProducts];
                const existingIndex = cartProducts.findIndex(
                    (item) => item.id === product.id
                );

                if (existingIndex > -1) {
                    updateCart[existingIndex].quantity += 1;
                    setCartProducts(updateCart);
                    localStorage.setItem(
                        "samCartItems",
                        JSON.stringify(updateCart)
                    );
                }
            }
        },
        [cartProducts]
    );

    const handleCartQtyDecrease = useCallback(
        (product: CartContextType) => {
            if (product.quantity === 1) {
                return;
            }

            if (cartProducts) {
                const updateCart = [...cartProducts];
                const existingIndex = cartProducts.findIndex(
                    (item) => item.id === product.id
                );

                if (existingIndex > -1) {
                    updateCart[existingIndex].quantity -= 1;
                    setCartProducts(updateCart);
                    localStorage.setItem(
                        "samCartItems",
                        JSON.stringify(updateCart)
                    );
                }
            }
        },
        [cartProducts]
    );

    const value = {
        cartTotalQty,
        cartProducts,
        handleAddProductToCart,
        handleRemoveCartProductFromCart,
        handleCartQtyIncrease,
        handleCartQtyDecrease,
    };
    return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === null) {
        throw new Error("useCart must be used within a CartContextProvider");
    }
    return context;
};

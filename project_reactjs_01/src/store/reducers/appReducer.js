import actionTypes from "../actions/actionTypes";
const initState = {
    banner: [],
    chill: {},
    remix: {},
    sad: {},
    top100: {},
    newRelease: {},
    weekChart: [],
    albumHot: {},
    chart: {},
    rank: [],
    isLoading: false,
};
const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return {
                ...state,
                banner:
                    action.homeData?.find(
                        (item) => item.sectionId === "hSlider"
                    )?.items || null,
                chill:
                    action.homeData?.find(
                        (item) => item.sectionId === "hEditorTheme"
                    ) || {},
                remix:
                    action.homeData?.find(
                        (item) => item.sectionId === "hEditorTheme3"
                    ) || {},
                sad:
                    action.homeData?.find(
                        (item) => item.sectionId === "hEditorTheme4"
                    ) || {},
                top100:
                    action.homeData?.find(
                        (item) => item.sectionId === "h100"
                    ) || {},
                newRelease:
                    action.homeData?.find(
                        (item) => item.sectionType === "new-release"
                    ) || {},
                weekChart:
                    action.homeData?.find(
                        (item) => item.sectionType === "weekChart"
                    )?.items || [],
                albumHot:
                    action.homeData?.find(
                        (item) => item.sectionId === "hAlbum"
                    ) || {},
                chart:
                    action.homeData?.find((item) => item.sectionId === "hZC")
                        ?.chart || {},
                rank:
                    action.homeData?.find((item) => item.sectionId === "hZC")
                        ?.items || [],
            };
        case actionTypes.LOADING:
            return {
                ...state,
                isLoading: action.flag,
            };

        default:
            return state;
    }
};
export default appReducer;

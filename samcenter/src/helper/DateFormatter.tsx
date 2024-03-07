import React from "react";

interface DateFormatterProps {
    dateString?: string;
}

const DateFormatter: React.FC<DateFormatterProps> = ({ dateString = "" }) => {
    const formatDate = (inputDate: string): string => {
        const date = new Date(inputDate);
        const options: Intl.DateTimeFormatOptions = {
            day: "numeric",
            month: "numeric",
            year: "numeric",
        };

        return date.toLocaleDateString("vi", options);
    };

    return <>{formatDate(dateString)}</>;
};

export default DateFormatter;

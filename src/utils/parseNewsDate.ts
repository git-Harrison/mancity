export const parseNewsDate = (snippet: string): string => {
    const relativeDatePattern = /\b(\d+)\s(days?|hours?|minutes?|weeks?|months?|years?)\sago\b/i;
    const absoluteDatePattern = /\b(\d{2})\s(\w{3})\s(\d{4})\b/;
    const relativeMatch = snippet.match(relativeDatePattern);
    const absoluteMatch = snippet.match(absoluteDatePattern);

    if (relativeMatch) {
        const quantity = relativeMatch[1];
        const unit = relativeMatch[2].toLowerCase();

        switch (unit) {
            case 'day':
            case 'days':
                return `${quantity}일 전`;
            case 'hour':
            case 'hours':
                return `${quantity}시간 전`;
            case 'minute':
            case 'minutes':
                return `${quantity}분 전`;
            case 'week':
            case 'weeks':
                return `${quantity}주 전`;
            case 'month':
            case 'months':
                return `${quantity}개월 전`;
            case 'year':
            case 'years':
                return `${quantity}년 전`;
            default:
                return snippet;
        }
    }

    if (absoluteMatch) {
        return `${absoluteMatch[1]} ${absoluteMatch[2]} ${absoluteMatch[3]}`;
    }

    return snippet;
};
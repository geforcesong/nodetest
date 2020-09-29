const ONE_SECOND = 1000;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;

function _parseDateTime(iptDate, isUtc = true) {
    if (!iptDate) {
        return null;
    }
    const dotIndex = iptDate.indexOf('.');
    if (dotIndex) {
        iptDate = iptDate.substring(0, dotIndex);
    }
    if (isUtc) {
        return _parseUtcDateTime(iptDate);
    }
    return new Date(iptDate.replace(/-/g, '/'));
}

function _parseUtcDateTime(iptDate) {
    if (!iptDate) {
        return null;
    }
    try {
        const dateArr = iptDate.split(/[T\/:\s\-]/g);
        dateArr[1] = dateArr[1] - 1; // month index should minus 1
        return new Date(Date.UTC(...dateArr));
    } catch (err) {
        return null;
    }
}

function formatDate(iptDate) {
    const date = _parseDateTime(iptDate);
    if (!date) {
        return '';
    }
    return date.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}

function fromNow(iptDate) {
    const date = _parseDateTime(iptDate);
    if (!date) {
        return '';
    }
    const now = new Date();
    let milliseconds = Math.abs(date - now);
    const days = Math.floor(milliseconds / ONE_DAY);
    milliseconds -= days * ONE_DAY;
    const hours = Math.floor(milliseconds / ONE_HOUR);
    milliseconds -= hours * ONE_HOUR;
    const minutes = Math.floor(milliseconds / ONE_MINUTE);
    milliseconds -= minutes * ONE_MINUTE;
    const seconds = Math.floor(milliseconds / ONE_SECOND);
    milliseconds -= seconds * ONE_SECOND;
    if (days) {
        return `${days} day${days === 1 ? '' : 's'} ago`;
    } else if (hours) {
        return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    } else if (minutes) {
        return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    }
    return `${seconds} second${seconds === 1 ? '' : 's'} ago`;
}

function dateDiff(iptDate1, type = 'seconds') {
    const date1 = _parseDateTime(iptDate1);
    const date2 = new Date();
    let milliseconds = Math.abs(date1 - date2);
    if (type === 'seconds') {
        return Math.floor(milliseconds / ONE_SECOND);
    } else if (type === 'minutes') {
        return Math.floor(milliseconds / ONE_MINUTE);
    } else if (type === 'hours') {
        return Math.floor(milliseconds / ONE_HOUR);
    }
    return Math.floor(milliseconds / ONE_DAY);
}

console.log(fromNow('2020-05-22T19:21:32.000Z+00:00'));
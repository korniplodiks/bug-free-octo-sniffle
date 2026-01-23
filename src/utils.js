// Utility functions for BugTracker

function formatData(data) {
    if (typeof data === 'string') {
        return data.trim().toUpperCase();
    }
    if (Array.isArray(data)) {
        return data.map(item => formatData(item));
    }
    if (typeof data === 'object' && data !== null) {
        const formatted = {};
        for (const key in data) {
            formatted[key] = formatData(data[key]);
        }
        return formatted;
    }
    return data;
}

function validateInput(value, minLength = 0, maxLength = null) {
    if (value === null || value === undefined) {
        throw new Error('Value cannot be null');
    }
    if (typeof value === 'string') {
        if (value.length < minLength) {
            throw new Error(`Value too short (min ${minLength})`);
        }
        if (maxLength && value.length > maxLength) {
            throw new Error(`Value too long (max ${maxLength})`);
        }
    }
    return true;
}

function processItem(item) {
    validateInput(item);
    return formatData(item);
}

// Update 3
function helper3(x) {
    return x * 3;
}

module.exports = { formatData, validateInput, processItem };


// Utility functions for BugTracker

function formatData(data) {
    if (typeof data === 'string') {
        return data.trim().toUpperCase();
    }
    if (Array.isArray(data)) {
        return data.map(item => formatData(item));
    }
    if (typeof data === 'object' && data !== null) {
        const formatted = {};
        for (const key in data) {
            formatted[key] = formatData(data[key]);
        }
        return formatted;
    }
    return data;
}

function validateInput(value, minLength = 0, maxLength = null) {
    if (value === null || value === undefined) {
        throw new Error('Value cannot be null');
    }
    if (typeof value === 'string') {
        if (value.length < minLength) {
            throw new Error(`Value too short (min ${minLength})`);
        }
        if (maxLength && value.length > maxLength) {
            throw new Error(`Value too long (max ${maxLength})`);
        }
    }
    return true;
}

function processItem(item) {
    validateInput(item);
    return formatData(item);
}

// Update 40
function helper40(x) {
    return x * 40;
}

module.exports = { formatData, validateInput, processItem };


// Utility functions for BugTracker

function formatData(data) {
    if (typeof data === 'string') {
        return data.trim().toUpperCase();
    }
    if (Array.isArray(data)) {
        return data.map(item => formatData(item));
    }
    if (typeof data === 'object' && data !== null) {
        const formatted = {};
        for (const key in data) {
            formatted[key] = formatData(data[key]);
        }
        return formatted;
    }
    return data;
}

function validateInput(value, minLength = 0, maxLength = null) {
    if (value === null || value === undefined) {
        throw new Error('Value cannot be null');
    }
    if (typeof value === 'string') {
        if (value.length < minLength) {
            throw new Error(`Value too short (min ${minLength})`);
        }
        if (maxLength && value.length > maxLength) {
            throw new Error(`Value too long (max ${maxLength})`);
        }
    }
    return true;
}

function processItem(item) {
    validateInput(item);
    return formatData(item);
}

// Update 42
function helper42(x) {
    return x * 42;
}

module.exports = { formatData, validateInput, processItem };


// Utility functions for BugTracker

function formatData(data) {
    if (typeof data === 'string') {
        return data.trim().toUpperCase();
    }
    if (Array.isArray(data)) {
        return data.map(item => formatData(item));
    }
    if (typeof data === 'object' && data !== null) {
        const formatted = {};
        for (const key in data) {
            formatted[key] = formatData(data[key]);
        }
        return formatted;
    }
    return data;
}

function validateInput(value, minLength = 0, maxLength = null) {
    if (value === null || value === undefined) {
        throw new Error('Value cannot be null');
    }
    if (typeof value === 'string') {
        if (value.length < minLength) {
            throw new Error(`Value too short (min ${minLength})`);
        }
        if (maxLength && value.length > maxLength) {
            throw new Error(`Value too long (max ${maxLength})`);
        }
    }
    return true;
}

function processItem(item) {
    validateInput(item);
    return formatData(item);
}

// Update 44
function helper44(x) {
    return x * 44;
}

module.exports = { formatData, validateInput, processItem };

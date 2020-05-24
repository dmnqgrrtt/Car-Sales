export const addFeatureToCar = newFeature => {
    return {
        type: 'ADD_FEATURE',
        payload: newFeature
    };
};

export const removeFeature = feature => {
    return {
        type: 'REMOVE_FEATURE',
        payload: feature
    };
};
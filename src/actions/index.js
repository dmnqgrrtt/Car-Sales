export const addFeatureToCar = newFeature => {
    console.log(newFeature);
    return {
        type: 'ADD_FEATURE',
        payload: newFeature
    };
};
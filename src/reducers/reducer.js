export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  const addFeatureNoDuplicates = (state, newFeature) => {
      for( let i=0; i<state.car.features.length;i++) {
          if(newFeature.id === state.car.features[i].id) {
              return state.car.features;
          }
          
      }
    
      return [...state.car.features, {name: newFeature.name, id: newFeature.id}];
  }

  const removeFeature = (state, featureToRemove) => {
    return state.car.features.filter(feature => {
        if(feature.id === featureToRemove.id) {
            return false;
        }
        return true;
    })
  }

  export const reducer = (state = initialState, action) => {
      switch(action.type){
        case 'ADD_FEATURE':
          
          return (
              {...state,
                car: {...state.car, 
                    
                    features: addFeatureNoDuplicates(state, action.payload)
                    
                }
              }
          );
        case 'REMOVE_FEATURE':
            return (
                {...state,
                    car: {...state.car,
                        features: removeFeature(state, action.payload)
                    }
                }
            );
        default:
            return state;
    
      }
      
      
  }
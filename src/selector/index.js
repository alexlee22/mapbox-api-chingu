import { createSelector } from 'reselect'

// reselect -> Redux addon
export const searchFilterData = createSelector(
  state => state.app.pureData,
  state => state.app.search,
  (geoJSONData, search) => {
    
    if (geoJSONData){
      let filteredList = geoJSONData.features.filter((d) => {
        let tempName = d.properties.name.toLowerCase();
        let tempSearch = search.toLowerCase();
        return(tempName.includes(tempSearch));
      })
      return(filteredList);
    } else {
      return(geoJSONData);
    }

  }
)
# Map
[[toc]]
## Install

This is the base Map component. If no props are provided, it shows an empty map component with default controls.

```vue
    <GMapMap
        :center="{lat: 51.093048, lng: 6.842120}"
        :zoom="7"
    />
```

## Provide your own style
You can provide custom map styling as prop.

You can generate custom map styles at  [https://mapstyle.withgoogle.com/](https://mapstyle.withgoogle.com/)
```vue{4}
    <GMapMap
        :center="{lat: 51.093048, lng: 6.842120}"
        :zoom="7"
        :style="mapStyles"
    />
```

## Disable ui elements
You can disable all ui components at once
```vue{4}
  <GMapMap
    :center="{lat: 51.093048, lng: 6.842120}"
    :zoom="7"
    :disableDefaultUI="true"
  />
```
You can also disable specific UI components

```vue{4,11}
  <GMapMap
    :center="{lat: 51.093048, lng: 6.842120}"
    :zoom="7"
    :options="{
                      zoomControl: true,
                      mapTypeControl: true,
                      scaleControl: true,
                      streetViewControl: true,
                      rotateControl: true,
                      fullscreenControl: true,
                }"
  />
```


## Access google maps instance
You can easily access Map instance by accessing map ref in your component.

```vue
<GMapMap
    :center="{lat: 51.093048, lng: 6.842120}"
    :zoom="7"
    ref="myMapRef"
    :disableDefaultUI="true"
/>
```

## Add custom button
You can use the map instance to add custom buttons to your map.

```vue
<template>
  <GMapMap
      :center="{lat: 51.093048, lng: 6.842120}"
      :zoom="7"
      ref="myMapRef"
      :disableDefaultUI="true"
  />
</template>
<script >
import { ref, watch } from "vue";

function addMyButton(map) {
  const controlUI = document.createElement("button");
  controlUI.title = "Click to zoom the map";
  const controlText = document.createElement("div");
  controlText.innerHTML = `Center`;
  controlUI.appendChild(controlText);
  
  controlUI.addEventListener("click", () => {
    map.setZoom(map.getZoom() + 1);
  });

  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlUI); // eslint-disable-line no-undef
}

export default {
  setup() {
    const myMapRef = ref();

    watch(myMapRef, googleMap => {
      if (googleMap) {
        googleMap.$mapPromise.then(map=> {
          addMyButton(map);
        })
      }
    });
    
    return {
      myMapRef
    }
  }
}
</script>
```

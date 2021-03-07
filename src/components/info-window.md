# Info Window
[[toc]]
## Add info window to your components
You can create info window by passing custom HTML or Vue components as the child of `Marker` component.
```vue
  <GMapMap>
    <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
    >
      <GMapInfoWindow>
        <div>I am in info window <MyComponent/>
        </div>
      </GMapInfoWindow>
    </GMapMarker>
</GMapMap>
```

## Open/close info window
You can pass `opened` prop to open and close InfoWindows.

```vue{7}
  <GMapMap>
    <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
    >
      <GMapInfoWindow
        :opened="true"
      >
        <div>I am in info window <MyComponent/>
        </div>
      </GMapInfoWindow>
    </GMapMarker>
</GMapMap>
```

## Options
You can pass any Google map InfoWindow component using `options` prop


```vue{8-14}
  <GMapMap>
    <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
    >
      <GMapInfoWindow
        :opened="true"
        :options=" {
              pixelOffset: {
                width: 10, height: 0
              },
              maxWidth: 320,
              maxHeight: 320,
       }"
      >
        <div>I am in info window <MyComponent/>
        </div>
      </GMapInfoWindow>
    </GMapMarker>
</GMapMap>
```

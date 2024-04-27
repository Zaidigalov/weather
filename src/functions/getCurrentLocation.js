function getCurrentLocation() {
  return new Promise((resolve, reject) => {
		if("geolocation" in navigator){
			navigator.geolocation.getCurrentPosition(
				(position) => {
					resolve({
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
					});
				},
				(error) => {
					alert("Мы не получили разрешение. Установлена локация по умолчанию")
					resolve({latitude: 55.7522,
							longitude: 37.6156,
						}
					)
				},
				{
					enableHighAccuracy: true,
					timeout: 5000,
					maximumAge: 0,
				}
			);}
		else{
			alert("Ваш браузер не поддерживает геолокацию")
		}
  });
}

export {getCurrentLocation}
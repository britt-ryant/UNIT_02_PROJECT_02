//jQuery to change the z-index of the form for adding a new fish to the document

$(() => {
	let toggle=0
		console.log(`script loaded`)
		$(`.toggleForm`).on(`click`, () => {
			 if(toggle === 0) {
				console.log(`connected and working`)
				$(`.newFishForm`).toggleClass(`show`)
				$(`#submit`).toggleClass(`smallButton`)
				$(`#species`).attr(`placeholder`, `species`).toggleClass(`inputBoxStd`)
				$(`#weight`).attr(`placeholder`, `weight`).toggleClass(`inputBoxStd`)
				toggle=1
			}else{
				$(`.newFishForm`).toggleClass(`show`)
				$(`#submit`).toggleClass(`smallButton`)
				$(`#species`).attr(`placeholder`, ``).toggleClass(`inputBoxStd`)
				$(`#weight`).attr(`placeholder`, ``).toggleClass(`inputBoxStd`)
				toggle=0
			}
		})
})

// 39.419390, -72.244713
// https://api.darksky.net/forecast/7649f2e71b4e98486f4f945d6053ebe0/42.3601,-71.0589
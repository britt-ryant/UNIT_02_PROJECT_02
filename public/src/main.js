//jQuery to change the z-index of the form for adding a new fish to the document

$(() => {
	let toggle=0

		console.log(`script loaded`)
		$(`.toggleForm`).on(`click`, () => {
			if(toggle === 0) {
				console.log(`connected and working`)
				$(`.newFishForm`).toggleClass(`show`)
				$(`#species`).attr(`placeholder`, `species`).css({"border":"2px solid rgba(255, 255, 255, .5)", 
	"border-radius": "5px"})
				$(`#weight`).attr(`placeholder`, `weight`).css({"border":"2px solid rgba(255, 255, 255, .5)", 
	"border-radius": "5px"})
				$(`.msg`).css({"color":"rgba(255,255,255,0)"})
				toggle = 1;
		} else {
				console.log(`connected and working`)
				$(`.newFishForm`).toggleClass(`show`)
				$(`#species`).attr(`placeholder`, ``).css({"border":"none", 
	"border-radius": "5px"})
				$(`#weight`).attr(`placeholder`, ``).css({"border":"none", 
	"border-radius": "5px"})
				$(`.msg`).css({"color":"rgba(255,255,255,0)"})
				toggle = 0;
		}

	})
})

// 39.419390, -72.244713
// https://api.darksky.net/forecast/7649f2e71b4e98486f4f945d6053ebe0/42.3601,-71.0589
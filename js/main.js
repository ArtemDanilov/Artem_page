import scss from "../sass/main.scss"

import {cursorMove, activeLinks} from "./cursor.js"
import { desktopAnimation, mobileAnimation} from "./animation.js"

window.addEventListener('mousemove', cursorMove)
activeLinks()

window.innerWidth >= 600 ? desktopAnimation() : mobileAnimation()

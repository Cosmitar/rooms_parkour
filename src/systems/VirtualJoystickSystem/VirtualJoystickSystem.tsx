import { useLayoutEffect, useState } from 'react'
import nipplejs from 'nipplejs'
import { useGame, useJoystickControls } from '../../utils/Ecctrl/Ecctrl'
import { MathUtils } from 'three'
import jumpButtonImage from '../../../public/assets/icons/jump-icon.svg'
import waveButtonImage from '../../../public/assets/icons/say_hi-icon.svg'

export default function VirtualJoystickSystem() {
  const setJoystick = useJoystickControls(state => state.setJoystick)
  const resetJoystick = useJoystickControls(state => state.resetJoystick)
  const jumpAction = useJoystickControls(state => state.pressButton1)
  const waveAction = useGame(state => state.action1)
  const releaseAllButtons = useJoystickControls(state => state.releaseAllButtons)

  useLayoutEffect(() => {
    const joystickZone = document.querySelector('#joystick_zone') as HTMLElement
    const btnsZone = document.querySelector('#buttons_zone') as HTMLElement
    // prevents context menu
    joystickZone.addEventListener('contextmenu', function (event) {
      event.preventDefault()
    })
    // prevents move camera on drag joystick
    joystickZone.addEventListener('touchstart', e => e.stopPropagation())
    joystickZone.addEventListener('touchmove', e => e.stopPropagation())

    // add buttons
    const createButton = ({
      id,
      icon,
      main = false,
      action = () => {},
    }: {
      id: string
      icon: string
      main?: boolean
      action?: () => void
    }) => {
      const btn = document.createElement('a')
      btn.setAttribute('id', id)
      btn.setAttribute('class', `joystickButton ${main && 'main'}`)

      btn.addEventListener('touchmove', e => e.stopPropagation())
      const img = document.createElement('img')
      img.setAttribute('src', icon)
      btn.appendChild(img)
      btnsZone.appendChild(btn)
      btn.addEventListener('touchstart', e => {
        e.stopPropagation()
        action()
      })
      btn.addEventListener('touchend', e => {
        e.stopPropagation()
        releaseAllButtons()
      })
      btn.addEventListener('contextmenu', function (event) {
        event.preventDefault()
      })
      return btn
    }

    createButton({id: 'wave', icon: waveButtonImage, action: waveAction })
    createButton({id: 'jump', icon: jumpButtonImage, action: jumpAction, main: true })
    

    // creates joystic
    const joystick = nipplejs.create({
      zone: joystickZone,
      color: '#fffa',
      mode: 'static',
      position: {
        top: '50%',
        left: '50%'
      }
    })

    // connects Nipplejs to Ecctrl joystick
    joystick.on('end', resetJoystick)
    joystick.on('move', (e, data) => {
      setJoystick(MathUtils.mapLinear(data.distance, 0, 50, 0, 1), data.angle.radian, data.distance >= 37)
    })

    return () => joystick.destroy()
  }, [])

  return <></>
}

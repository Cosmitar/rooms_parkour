import { useLayoutEffect } from 'react'
import nipplejs from 'nipplejs'

export default function VirtualJoystickSystem() {
  useLayoutEffect(() => {
    const joystickZone = document.querySelector('#joystick_zone') as HTMLElement
    joystickZone.addEventListener('touchstart', (e) => e.stopPropagation())
    joystickZone.addEventListener('touchmove', (e) => e.stopPropagation())
    const joystick = nipplejs.create({
      zone: joystickZone,
      color: 'blue',
    })
    
    return () => joystick.destroy()
  }, [])

  return <></>
}

import * as React from 'react'

interface IHeaderProps {
  handleInitCallback: () => void
  setFilterCallback: (filter: string) => void
}

export function Header(props: IHeaderProps) {
  const [dropdownActive, setDropdownActive] = React.useState(false)
  const [orderFilter, setOrderFilter] = React.useState('')
  const { handleInitCallback, setFilterCallback } = props
  const ddOptions = [
    ['CREATED', 'Cooking Now'],
    ['COOKED', 'Prepared'],
    ['DRIVER_RECEIVED', 'Out for Delivery'],
    ['DELIVERED', 'Delivered'],
    ['CANCELLED', 'Cancelled'],
  ]

  function handleInputChange(e: React.FormEvent<HTMLInputElement>) {
    const ev = e.target
    setOrderFilter(ev.value)
  }

  function toggleDropdown(e: React.SyntheticEvent<EventTarget>) {
    setDropdownActive(!dropdownActive)
  }

  function closeDropdown() {
    if (dropdownActive) {
      setTimeout(() => {
        setDropdownActive(false)
      }, 300)
    }
  }

  function onInputKeyPressed(e: React.FormEvent<HTMLInputElement>) {
    console.log(e)
  }

  function handleDropdownSelection(e: React.SyntheticEvent<EventTarget>) {
    console.log(e)
  }

  return (
    <header className="flex flex-wrap rounded-lg shadow-lg mx-4 border border-gray-800">
      <div className="title mx-4 mt-4 text-xl">
        Front-end Engineering Challenge
        <span className="block text-sm">by Derek Rush</span>
      </div>
      <div className="flex-1">
        <div className="push_button blue_push" onClick={handleInitCallback}>
          Initialize
        </div>
      </div>
      <div className="relative w-1/4 lg:w-1/5 mr-8">
        <input
          className="m-4"
          name="name"
          type="text"
          placeholder="Filter"
          value={orderFilter}
          onChange={handleInputChange}
          onClick={toggleDropdown}
          onKeyDown={onInputKeyPressed}
        />
        <div
          className={`${dropdownActive ? 'block' : 'hidden'} dropdown-options`}
        >
          <ul>
            {ddOptions.map(opt => (
              <li
                key={opt[0]}
                onClick={handleDropdownSelection}
                className="text-xl py-1 px-2 hover:bg-black hover:cursor-pointer t-shadow"
                data-value={opt[0]}
              >
                {opt[1]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

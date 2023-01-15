import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <ul>
            <li>
                Things to do
            </li>
            <li>
                <Link to="/Fibonacci">Fibonacci</Link>
            </li>
            <li>
                <Link to="/Strings">Strings</Link>
            </li>
            <li>
                <Link to="/PrimeNumbers">Prime Numbers</Link>
            </li>
        </ul>
    </div>
  )
}

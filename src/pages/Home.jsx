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
                <Link to="/fibonacci">Fibonacci</Link>
            </li>
        </ul>
    </div>
  )
}

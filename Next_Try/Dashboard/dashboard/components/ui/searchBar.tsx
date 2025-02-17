import React from 'react'
import { Input } from './input'
import { Button } from './button'

function searchBar() {
  return (
    <>
    <Input  type='text' placeholder='search ...'/>
    <Button>
    Search
        </Button>
    </>
  )
}

export default searchBar

import { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"

const SearchFilter = (props) => {

    const [selectedFilter, setSelectedFilter] = useState('')
    const [selectedFilterValue, setSelectedFilterValue] = useState('')
    const [selectedSort, setSelectedSort] = useState('')

    const onChangeSort = (event) => {
        setSelectedSort(event.target.value)
    }

    const onChangeFilter = (event) => {
        setSelectedFilter(event.target.value)
    }

    const onChangeFilterValue = (event) => {
        setSelectedFilterValue(event.target.value)
    }

    const applyFilters = () => {
        if (selectedFilter !== '' && selectedFilterValue === '') {
            window.alert('You selected a filter but not a filter value. Select a filter value to apply.')
        } else if (selectedFilter === '' && selectedSort === '') {
            window.alert('Nothing to apply!')
        } else {
            props.onSelect(selectedFilter, selectedFilterValue, selectedSort)
        }
    }

    return <Modal size="lg" centered show={props.show} onHide={props.onClose}>
        <Modal.Header closeButton>
            <h4 className="mt-auto mb-auto ms-2">Sort and Filter</h4>
        </Modal.Header>
        <Modal.Body className="p-4">
            <h5>Filter</h5>
            <Form.Select className="mt-3" onChange={onChangeFilter}>
                <option disabled selected value=''>Select a filter</option>
                <option value="type">by category</option>
                <option value="username">by username</option>
                <option value="location">by distance</option>
            </Form.Select>
            <Form.Select disabled={selectedFilter === ''} className="mt-3" onChange={onChangeFilterValue}>
                <option disabled selected value=''>Select a filter value</option>
            </Form.Select>
            <h5 className="mt-4">Sort</h5>
            <Form.Select className="mt-3" onChange={onChangeSort}>
                <option disabled selected value=''>Sort by ...</option>
                <option value="type">Recent posts first</option>
                <option value="username">Oldest posts first</option>
            </Form.Select>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-secondary" onClick={() => props.onSelect(null, null, null)}>Clear</Button>
            <Button variant="warning" onClick={() => applyFilters()}>Apply</Button>

        </Modal.Footer>
    </Modal>
}

export default SearchFilter
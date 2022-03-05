import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import Category from "../components/Onboarding/Category"
import Data from "../data/Data"

const Onboarding = () => {
    const [categories, setCategories] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([])

    const [popularUsers, setPopularUsers] = useState([])
    const [selectedUsers, setSelectedUsers] = useState([])

    useEffect(() => {
        Data.getAllCategories().then(categories => {
            setCategories(categories)
        })

        Data.getPopularUsers().then(users => {
            setPopularUsers(users)
        })
    }, [])

    const selectOrUnselectCategory = (categoryId) => {
        const categoriesToSelect = [...selectedCategories]
        const index = categoriesToSelect.indexOf(categoryId);
        if(index == -1) {
            categoriesToSelect.push(categoryId)
        } else {
            categoriesToSelect.splice(index, 1)
        }
        setSelectedCategories(categoriesToSelect)
    }

    const selectOrUnselectPopularUser = (userId) => {
        const usersToSelect = [...selectedUsers]
        const index = usersToSelect.indexOf(userId);
        if(index == -1) {
            usersToSelect.push(userId)
        } else {
            usersToSelect.splice(index, 1)
        }
        setSelectedUsers(usersToSelect)
    }

    return <Row className="p-5">
        <Col sm={12}>
            <h3 className="pb-5">Welcome to GatorShare!</h3>
            <h5 className="pb-2">To get started, pick a few interests...</h5>
        </Col>
        {
            categories.map(category => {
                return <Col sm={12} md={4} lg={3} onClick={() => selectOrUnselectCategory(category.id)}>
                    <Category data={category} selected={selectedCategories.indexOf(category.id) != -1} />
                </Col>
            })
        }
    </Row>
}

export default Onboarding
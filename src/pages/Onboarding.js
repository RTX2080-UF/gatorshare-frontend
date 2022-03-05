import { useEffect, useState } from "react"
import { Button, Col, Row } from "react-bootstrap"
import Category from "../components/Onboarding/Category"
import User from "../components/Onboarding/User"
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
        if (index === -1) {
            categoriesToSelect.push(categoryId)
        } else {
            categoriesToSelect.splice(index, 1)
        }
        setSelectedCategories(categoriesToSelect)
    }

    const selectOrUnselectPopularUser = (userId) => {
        const usersToSelect = [...selectedUsers]
        const index = usersToSelect.indexOf(userId);
        if (index === -1) {
            usersToSelect.push(userId)
        } else {
            usersToSelect.splice(index, 1)
        }
        setSelectedUsers(usersToSelect)
    }

    return <Row className="p-5">
        <Col>
            <h3 className="text-color-accent">Welcome to GatorShare!</h3>
            <p className="p-0 m-0">We're glad you're here. Let's roll!</p>
        </Col>
        <Col sm="auto">
            <a href="/"><Button variant="warning"><b>NEXT</b></Button></a>
        </Col>
        <Col sm={12}>
            <div className="pt-4 pb-4">
                <hr />
            </div>
            <h5>What do you want to do here?</h5>
            <p className="p-0 m-0 mb-3">Pick a few categories to get started...</p>
        </Col>
        {
            categories.map(category => {
                return <Col sm={12} md={4} lg={3} className="mt-3" onClick={() => selectOrUnselectCategory(category.id)}>
                    <Category data={category} selected={selectedCategories.indexOf(category.id) !== -1} />
                </Col>
            })
        }
        <Col sm={12}>
            <div className="pt-4 pb-4">
                <hr />
            </div>
            <h5>These users are popular around your area!</h5>
            <p className="p-0 m-0 mb-3">Select the ones you want to follow and see posts of...</p>
        </Col>
        {
            popularUsers.map(user => {
                return <Col sm={12} md={4} lg={3} className="mt-3" onClick={() => selectOrUnselectPopularUser(user.id)}>
                    <User data={user} selected={selectedUsers.indexOf(user.id) !== -1} />
                </Col>
            })
        }
    </Row>
}

export default Onboarding
import { useEffect, useState } from "react"
import { Button, Col, Row } from "react-bootstrap"
import Category from "../components/Onboarding/Category"
import User from "../components/Onboarding/User"
import Data from "../data/Data"
import * as SessionUtils from "../utils/SessionUtils"

const Onboarding = () => {
    const [popularTags, setPopularTags] = useState([])
    const [selectedTags, setSelectedTags] = useState([])

    const [popularUsers, setPopularUsers] = useState([])
    const [selectedUsers, setSelectedUsers] = useState([])

    useEffect(() => {
        Data.getPopularUsers().then(users => {
            setPopularUsers(users)
        })

        Data.getPopularTags().then(response => {
            setPopularTags(response.data)
        })
    }, [])

    const selectOrUnselectTag = (tagId) => {
        const tagsToSelect = [...selectedTags]
        const index = tagsToSelect.indexOf(tagId);
        if (index === -1) {
            tagsToSelect.push(tagId)
        } else {
            tagsToSelect.splice(index, 1)
        }
        setSelectedTags(tagsToSelect)
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

    const onboardUser = () => {
        Data.followTagsOnboarding(selectedTags).then(
            () => {
                window.location.href = '/'
            }
        ).catch(e => window.alert(e))
    }

    return <Row className="p-5">
        <Col>
            <h3 className="text-color-accent">Welcome to GatorShare!</h3>
            <p className="p-0 m-0">We're glad you're here. Let's roll!</p>
        </Col>
        <Col sm="auto">
            <Button variant="warning" onClick={() => onboardUser()}><b>NEXT</b></Button>
        </Col>
        <Col sm={12}>
            <div className="pt-4 pb-4">
                <hr />
            </div>
            <h5>What do you want to do here?</h5>
            <p className="p-0 m-0 mb-3">Pick a few categories to get started...</p>
        </Col>
        {
            popularTags.map(tag => {
                return <Col key={tag.ID} sm={12} md={4} lg={3} className="mt-3" onClick={() => selectOrUnselectTag(tag.ID)}>
                    <Category data={tag} selected={selectedTags.indexOf(tag.ID) !== -1} />
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
                return <Col key={user.id} sm={12} md={4} lg={3} className="mt-3" onClick={() => selectOrUnselectPopularUser(user.id)}>
                    <User data={user} selected={selectedUsers.indexOf(user.id) !== -1} />
                </Col>
            })
        }
    </Row>
}

export default Onboarding
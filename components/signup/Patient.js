import React from 'react'
import { useState, useContext, useRef } from "react";
import { useRouter } from "next/router";
import { MessageContext } from "../../context";
import { Flex, Button } from "@chakra-ui/react";
import Wrapper from "./Wrapper";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFourPatient";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, serverTimestamp, updateDoc, setDoc } from 'firebase/firestore'
import { ref, getDownloadURL, uploadString } from 'firebase/storage'
import { db, storage, auth } from '../../firebase';

const Patient = () => {
    const { flashMessage, setFlashMessage } = useContext(MessageContext);
    const router = useRouter();
    const [tabIndex, setTabIndex] = useState(0);
    const imagePickerRef = useRef(null);
    const [formState, setFormState] = useState({
        isDoctor: false,
        email: "",
        password: "",
        confirmPassword: "",
        title: "",
        firstname: "",
        lastname: "",
        gender: "",
        dob: "",
        street: "",
        city: "",
        country: "",
        phoneno: "",
        bloodType: "",
        weight: "",
        allergies: [{ name: "", severity: "" }],
    });

    const onNextStepOne = () => {
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        if (!formState.email || !formState.password || !formState.confirmPassword) {
            setFlashMessage({
                status: "error",
                title: "Inputs Error",
                description: "Please fill all the inputs",
            });
            return null;
        } else if (formState.password !== formState.confirmPassword) {
            setFlashMessage({
                status: "error",
                title: "Password Error",
                description: "Passwords do not match",
            });
            return null;
        } else if (!emailRegex.test(formState.email)) {
            setFlashMessage({
                status: "error",
                title: "Email error",
                description: "Please enter a valid email address",
            });
            return null;
        } else if (formState.password.length < 6) {
            setFlashMessage({
                status: "error",
                title: "Password Error",
                description: "Passwords must be at least 6 characters",
            });
        } else if (
            formState.password === formState.confirmPassword &&
            formState.password !== ""
        ) {
            setTabIndex(tabIndex + 1);
        }
    };

    const onNextStepTwo = () => {
        if (
            !formState.title ||
            !formState.firstname ||
            !formState.lastname ||
            !formState.gender ||
            !formState.dob
        ) {
            setFlashMessage({
                status: "error",
                title: "Inputs Error",
                description: "Please fill all the inputs",
            });
        } else if (formState.firstname.length <= 1) {
            setFlashMessage({
                status: "error",
                title: "Check firstname field",
                description: "Firstname must be alteast 2 characters",
            });
        } else if (formState.lastname.length <= 1) {
            setFlashMessage({
                status: "error",
                title: "Check lastname field",
                description: "Lastname must be atleast 2 characters",
            });
        } else {
            setTabIndex(tabIndex + 1);
        }
    };

    const onNextStepThree = () => {
        if (
            !formState.phoneno ||
            !formState.street ||
            !formState.city ||
            !formState.country
        ) {
            setFlashMessage({
                status: "error",
                title: "Check all the inputs fields",
                description: "Please fill all the inputs",
            });
        } else {
            setTabIndex(tabIndex + 1);
        }
    };

    const handleAddClick = (key, formFieldsObject) => {
        setFormState({
            ...formState,
            [key]: [...formState[key], formFieldsObject],
        });
    };

    const handleRemoveClick = (key, i) => {
        // Spread the value at the formState key into list
        const list = [...formState[key]];

        // at index i, remove one item
        list.splice(i, 1);
        setFormState({
            ...formState,
            [key]: list,
        });
    };

    const onArrValueChange = (e, key, i, subKey) => {
        const list = [...formState[key]];

        list[i][subKey] = e.target.value;

        setFormState({
            ...formState,
            [key]: list,
        });

        setFlashMessage(null);
    };

    const onValueChange = (e, key) => {
        setFormState({
            ...formState,
            [key]: e.target.value,
        });
    };

    const sanitizedForm = () => {
        return {
            title: formState.title,
            firstname: formState.firstname,
            lastname: formState.lastname,
            gender: formState.gender,
            phoneno: formState.phoneno,
            email: formState.email,
            isDoctor: formState.isDoctor,
            dob: formState.dob,
            address: {
                street: formState.street,
                city: formState.city,
                country: formState.country,
            },
            patientInfo: {
                weight: formState.weight,
                bloodType: formState.bloodType,
                allergies: formState.allergies,
            },
            created: serverTimestamp(),
        };
    };

    const handleSubmit = () => {
        if (!formState.allergies) {
            setFlashMessage({
                status: "error",
                title: "Allergies",
                description: "Please fill all allergy fields",
            });
            return null;
        } else if (!formState.bloodType) {
            setFlashMessage({
                status: "error",
                title: "BloodType",
                description: "Please select one bloodtype",
            });
            return null;
        } else if (!formState.weight) {
            setFlashMessage({
                status: "error",
                title: "Weight",
                description: "Please input your weight",
            });
            return null;
        } else {
            if (!flashMessage) {
                // signup here using firebase
                console.log(sanitizedForm());
                createUserWithEmailAndPassword(auth, sanitizedForm().email, formState.password)
                    .then(async userCredential => {
                        const docRef = doc(db, "users", userCredential
                            .user.uid)
                        setDoc(docRef, sanitizedForm())
                        const imageRef = ref(storage, `users/${docRef.id}/image`);

                        await uploadString(imageRef, formState.image, "data_url").then(async snapshot => {
                            const downloadUrl = await getDownloadURL(imageRef)

                            await updateDoc(doc(db, 'users', docRef.id), {
                                image: downloadUrl
                            })
                        })
                        router.push('/login')

                    }).catch(err => console.log(err.message));
            }
        }
    };

    const handleImageUpload = e => {
        const reader = new FileReader()
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = readerEvent => {

            setFormState({
                // eslint-disable-next-line no-useless-computed-key
                ...formState, ['image']: readerEvent.target.result
            })
        }
    }

    const onPrev = (index) => setTabIndex(index - 1);

    const showFormStep = () => {
        switch (tabIndex) {
            case 0:
                return (
                    <>
                        <StepOne formState={formState} onValueChange={onValueChange} />
                        <Flex justify={"space-between"}>
                            <Button onClick={() => router.goBack()}>Prev</Button>
                            <Button onClick={onNextStepOne}>Next</Button>
                        </Flex>
                    </>
                );
            case 1:
                return (
                    <>
                        <StepTwo formState={formState} onValueChange={onValueChange} />
                        <Flex justify={"space-between"}>
                            <Button onClick={onPrev}>Prev</Button>
                            <Button onClick={onNextStepTwo}>Next</Button>
                        </Flex>
                    </>
                );
            case 2:
                return (
                    <>
                        <StepThree formState={formState} onValueChange={onValueChange} />
                        <Flex justify={"space-between"}>
                            <Button onClick={onPrev}>Prev</Button>
                            <Button onClick={onNextStepThree}>Next</Button>
                        </Flex>
                    </>
                );
            case 3:
                return (
                    <>
                        <StepFour
                            formState={formState}
                            onValueChange={onValueChange}
                            handleAddClick={handleAddClick}
                            handleRemoveClick={handleRemoveClick}
                            onArrValueChange={onArrValueChange}
                            imagePickerRef={imagePickerRef}
                            handleImage={handleImageUpload}
                        />
                        <Flex justify={"space-between"}>
                            <Button onClick={onPrev}>Prev</Button>
                            <Button onClick={handleSubmit}>Submit</Button>
                        </Flex>
                    </>
                );
            default:
                return null;
        }
    };

    return <Wrapper>{showFormStep()}</Wrapper>;
};

export default Patient;

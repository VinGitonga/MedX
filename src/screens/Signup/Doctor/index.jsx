import { Button, Flex } from "@chakra-ui/react";
import { useState, useContext, useRef } from "react";
import Register from "../Register";
import StepOne from "../StepOne";
import StepThree from "../StepThree";
import StepTwo from "../StepTwo";
import StepFour from "./StepFour";
import { MessageContext } from "../../../context";
import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth'
import { addDoc, collection, doc, serverTimestamp, updateDoc } from '@firebase/firestore'
import { ref, getDownloadURL, uploadString } from '@firebase/storage'
import { db, storage, app } from '../../../firebase'
import { useHistory } from "react-router-dom";

const Doctor = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const { flashMessage, setFlashMessage } = useContext(MessageContext);
    const history = useHistory();
    const imagePickerRef = useRef(null)

    const [formState, setFormState] = useState({
        isDoctor: true,
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
        license: "",
        speciality: "",
        subSpeciality: "",
        educations: [{ education: "" }],
        accreditations: [{ accreditation: "" }],
        languages: [""],
        yearsOfExperience: "",
        image:null,
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

    /**
     * Init new Array
     * loop over each object in the array
     * get the value and push into the new array
     * return the new array
     */

    const deleteKeys = (key, subKey) => {
        const newArr = [];
        formState[key].forEach((el) => {
            newArr.push(el[subKey]);
        });
        return newArr;
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
            address: {
                street: formState.street,
                city: formState.city,
                country: formState.country,
            },
            dob: formState.dob,
            doctorInfo: {
                license: formState.license,
                accreditations: deleteKeys("accreditations", "accreditation"),
                speciality: formState.speciality,
                subSpeciality: formState.subSpeciality,
                education: deleteKeys("educations", "education"),
                yearsExperience: formState.yearsOfExperience,
                languages: formState.languages,
            },
            created: serverTimestamp()
        };
    };

    const handleSubmit = async () => {
        if (!formState.license) {
            setFlashMessage({
                status: "error",
                title: "License Error",
                description: "Please include a valid license no.",
            });
            return null;
        } else if (!formState.speciality) {
            setFlashMessage({
                status: "error",
                title: "Check Specility",
                description: "Please input the speciality field.",
            });
            return null;
        } else if (!formState.subSpeciality) {
            setFlashMessage({
                status: "error",
                title: "Sub Speciality Field Error",
                description: "Please input the Sub Speciality Field",
            });
            return null;
        } else if (!formState.yearsOfExperience) {
            setFlashMessage({
                status: "error",
                title: "Years of Experience Field error",
                description: "Please input years of experience field",
            });
            return null;
        } else if (!formState.accreditations) {
            setFlashMessage({
                status: "error",
                title: "Accreditations",
                description: "Please add a valid accreditation",
            });
            return null;
        } else if (!formState.educations) {
            setFlashMessage({
                status: "error",
                title: "Education",
                description: "Please input all the educations fields",
            });
            return null;
        } else if (!formState.languages) {
            setFlashMessage({
                status: "error",
                title: "Languages",
                description: "Please include the languages you speak",
            });
            return null;
        } else {
            if (!flashMessage) {
                // signup here using firebase
                // console.log(sanitizedForm());
                const auth = getAuth(app);
                createUserWithEmailAndPassword(auth, sanitizedForm().email, formState.password)
                    .then(async userCredential => {
                        console.log('worked')
                        const docRef = await addDoc(collection(db, 'users'), sanitizedForm());
                        const imageRef = ref(storage, `users/${docRef.id}/image`);

                        await uploadString(imageRef, formState.image, "data_url").then(async snapshot => {
                            const downloadUrl = await getDownloadURL(imageRef)

                            await updateDoc(doc(db, 'users', docRef.id), {
                                image: downloadUrl
                            })
                        })
                        history.push('/login')
                    }).catch(err => console.log(err.message));
            }
        }
    };

    const handleAddClick = (key, formFieldsObject) => {
        setFormState({
            ...formState,
            [key]: [...formState[key], formFieldsObject],
        });
    };

    const handleAddLanguage = (key) => {
        setFormState({
            ...formState,
            [key]: [...formState[key], ""],
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

    const handleLanguages = (e, i) => {
        const list = [...formState["languages"]];
        list[i] = e.target.value;

        setFormState({
            ...formState,
            // eslint-disable-next-line no-useless-computed-key
            ["languages"]: list,
        });

        setFlashMessage(null);
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

    const handleImageUpload = e => {
        const reader = new FileReader()
        if (e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = readerEvent => {

            setFormState({
                // eslint-disable-next-line no-useless-computed-key
                ...formState, ['image']: readerEvent.target.result
            })
        }
    }

    const onPrev = () => setTabIndex(tabIndex - 1);

    // const handleTabChange = index => setTabIndex(index);

    const showFormStep = () => {
        switch (tabIndex) {
            case 0:
                return (
                    <>
                        <StepOne formState={formState} onValueChange={onValueChange} />
                        <Flex justify={"space-between"} mt={6}>
                            <Button onClick={() => history.goBack()}>Prev</Button>
                            <Button onClick={onNextStepOne}>Next</Button>
                        </Flex>
                    </>
                );
            case 1:
                return (
                    <>
                        <StepTwo formState={formState} onValueChange={onValueChange} />
                        <Flex justify={"space-between"} mt={6}>
                            <Button onClick={onPrev}>Prev</Button>
                            <Button onClick={onNextStepTwo}>Next</Button>
                        </Flex>
                    </>
                );
            case 2:
                return (
                    <>
                        <StepThree formState={formState} onValueChange={onValueChange} />
                        <Flex justify={"space-between"} mt={6}>
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
                            handleAddLanguage={handleAddLanguage}
                            handleLanguages={handleLanguages}
                            imagePickerRef={imagePickerRef}
                            handleImage={handleImageUpload}
                        />
                        <Flex justify={"space-between"} mt={6}>
                            <Button onClick={onPrev}>Prev</Button>
                            <Button onClick={handleSubmit}>Submit</Button>
                        </Flex>
                    </>
                );
            default:
                return null;
        }
    };

    return <Register>{showFormStep()}</Register>;
};

export default Doctor;

import React from 'react'
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Flex,
  Link,
  Image,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import { useState } from "react";
import { sendContactForm } from "../../lib/api";

// variables used to store form values and states
const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };


const EmailSection = () => {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  // set variables to make attribute access easier
  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  // function to track the changes made to the form
  // will only change the form data of the event that triggered it
  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <Container maxW="lg" mt={12}>
      <Flex justify="space-between">
        <div>
          <Heading className="text-[#5d4d3d] text-xl font-semibold mb-2">Contact</Heading>
          <Flex mt={4}>
            <Link href="https://github.com">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="https://linkedin.com">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
          </Flex>
        </div>
        <div>
          <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
            <FormLabel className="text-l text-[#5d4d3d] font-semibold">Name</FormLabel>
            <Input
              type="text"
              name="name"
              errorBorderColor="red.300"
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
            <FormLabel className="text-l text-[#5d4d3d] font-semibold">Email</FormLabel>
            <Input
              type="email"
              name="email"
              errorBorderColor="red.300" // change border on error
              value={values.email}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl mb={5} isRequired isInvalid={touched.subject && !values.subject}>
            <FormLabel className="text-l text-[#5d4d3d] font-semibold">Subject</FormLabel>
            <Input
              type="text"
              name="subject"
              errorBorderColor="red.300"
              value={values.subject}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={touched.message && !values.message} mb={5}>
            <FormLabel className="text-l text-[#5d4d3d] font-semibold">Message</FormLabel>
            <Textarea
              type="text"
              name="message"
              rows={4}
              errorBorderColor="red.300"
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <Button
            className="text-l text-[#5d4d3d] font-semibold"
            variant="outline"
            colorScheme="blue"
            isLoading={isLoading}
            disabled={!values.name || !values.email || !values.subject || !values.message}
            onClick={onSubmit}
          >
            Submit
          </Button>
        </div>
      </Flex>
    </Container>
  )
}

export default EmailSection
import React, { useState } from 'react';
import { 
  Button, FormControl, FormErrorMessage, 
  FormLabel, Heading, Input, Link, Text,
  Image, Textarea, useToast, Flex, Box,
  SimpleGrid,
} from "@chakra-ui/react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import { sendContactForm } from "../../lib/api";

const initValues = { name: "", email: "", subject: "", message: "" };
const initState = { isLoading: false, error: "", values: initValues };

const EmailSection = () => {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

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
    <Box maxW="container.xl" mt={12} px={4}>
      <SimpleGrid 
        columns={[1, null, 2]} 
      >
        <Box p={4} pl={0} mr={6}>
          <Heading className="text-[#5d4d3d] text-xl mb-2 font-light">{"Let's Connect!"}</Heading>
        <Text color="#5d4d3d" mb={2}>
            {"I'm always looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I will try to get back to you as soon as I can!"}
          </Text>
          <Flex mt={6} alignItems="center">
            <Link href="https://github.com/isabellekwan">
              <Image color="#5d4d3d" src="/github-icon.svg" alt="Github Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/isabelle-kwan/" ml={4}>
              <Image color="#5d4d3d" src="/linkedin-icon.svg" alt="Linkedin Icon" />
            </Link>
          </Flex>
        </Box>
        <Box p={4} ml={10}>
          <FormControl isRequired isInvalid={touched.name && !values.name} mb={5} requiredIndicator={<span style={{ color: '#C4A484' }}>*</span>}>
            <FormLabel className="text-l text-[#5d4d3d] font-semibold">Name</FormLabel>
            <Input
              type="text"
              name="name"
              variant='outline' 
              placeholder='Your Name'
              _placeholder={{ opacity: 0.7, color: '#5d4d3d' }}
              bg="white"
              borderWidth="2px"
              borderColor="#5d4d3d"
              focusBorderColor='#C4A484'
              errorBorderColor="red.300"
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
              width="100%"
              _hover={{borderColor:'#C4A484'}}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
            <FormLabel className="text-l text-[#5d4d3d] font-semibold">Email</FormLabel>
            <Input
              type="email"
              name="email"
              variant='outline' 
              placeholder='yourname@email.com'
              _placeholder={{ opacity: 0.7, color: '#5d4d3d' }}
              bg="white"
              borderWidth="2px"
              borderColor="#5d4d3d"
              focusBorderColor='#C4A484'
              errorBorderColor="red.300"
              value={values.email}
              onChange={handleChange}
              onBlur={onBlur}
              width="100%"
              _hover={{borderColor:'#C4A484'}}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl mb={5} isRequired isInvalid={touched.subject && !values.subject}>
            <FormLabel className="text-l text-[#5d4d3d] font-semibold">Subject</FormLabel>
            <Input
              type="text"
              name="subject"
              variant="outline"
              placeholder="Subject"
              _placeholder={{ opacity: 0.7, color: '#5d4d3d' }}
              bg="white"
              borderWidth="2px"
              borderColor="#5d4d3d"
              focusBorderColor='#C4A484'
              errorBorderColor="red.300"
              value={values.subject}
              onChange={handleChange}
              onBlur={onBlur}
              width="100%"
              _hover={{borderColor:'#C4A484'}}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={touched.message && !values.message} mb={5}>
            <FormLabel className="text-l text-[#5d4d3d] font-semibold">Message</FormLabel>
            <Textarea
              name="message"
              rows={4}
              variant="outline"
              placeholder="Please type your message here!"
              _placeholder={{ opacity: 0.7, color: '#5d4d3d' }}
              bg="white"
              borderWidth="2px"
              borderColor="#5d4d3d"
              focusBorderColor='#C4A484'
              errorBorderColor="red.300"
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
              width="100%"
              _hover={{borderColor:'#C4A484'}}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <Button
            className="text-l text-[#5d4d3d] font-semibold"
            variant="outline"
            colorScheme="#5d4d3d"
            disabled={!values.name || !values.email || !values.subject || !values.message}
            isLoading={isLoading}
            onClick={onSubmit}
            width="100%"
          >
            Submit
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default EmailSection;

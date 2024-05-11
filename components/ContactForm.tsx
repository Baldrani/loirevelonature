"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import Container from "./ui/container";

const formSchema = z
    .object({
        name: z.string(),
        email: z.string().email({
            message: "Please enter a valid email address.",
        }),
        message: z.string(),
    })
    .required();

export function ContactForm() {
    const {
        handleSubmit,
        control,
        trigger,
        formState: { errors, isValid },
    } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    // 2. Define a submit handler.
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    };

    const handleOnChangeText = (value: string, onChange: (...event: string[]) => void) => {
        onChange(value);
        trigger();
    };

    console.log(errors);
    function TextFieldError({ error }: { error?: string }) {
        return error ? (
            <div
                style={{
                    color: "red",
                    position: "absolute",
                    top: "-16px",
                    fontSize: "0.8em",
                }}
            >
                {error}
            </div>
        ) : null;
    }

    return (
        <Container>
            <form>
                <div className="grid w-10/12 gap-2 m-auto">
                    <FormField
                        control={control}
                        name="name"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Name" onBlur={onBlur} onChange={e => handleOnChangeText(e.target.value, onChange)} value={value} />
                                </FormControl>
                                {errors.name && <TextFieldError error={errors.name.message} />}

                                {/* <FormDescription>This is your public display name.</FormDescription> */}
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={control}
                        name="email"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Email" onBlur={onBlur} onChange={e => handleOnChangeText(e.target.value, onChange)} value={value} />
                                </FormControl>
                                {errors.email && <FormMessage>{errors.email.message}</FormMessage>}

                                <FormDescription>This is your public display name.</FormDescription>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={control}
                        name="message"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea placeholder="Type your message here." onBlur={onBlur} onChange={e => handleOnChangeText(e.target.value, onChange)} value={value} />
                                    <Input placeholder="Email" />
                                </FormControl>
                                {errors.message && <FormMessage>{errors.message.message}</FormMessage>}

                                <FormDescription>This is your public display name.</FormDescription>
                            </FormItem>
                        )}
                    />

                    <Button disabled={isValid ? false : true} onClick={handleSubmit(onSubmit)}>
                        Send message
                    </Button>
                </div>
            </form>
        </Container>
    );
}

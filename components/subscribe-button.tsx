"use client"

import { useState } from "react";
import { toast } from "./ui/use-toast";
import axios from "axios";
import { Button } from "./ui/button";

interface SubscribeButtonProps {
    isPro?: boolean
}

const SubscribeButton = ({ isPro = false }: SubscribeButtonProps) => {

    const onSubscribe = async () => {

        try {
            const response = await axios.get("/api/users/stripe");

            window.location.href = response.data.url;
        } catch (error) {
            toast({
                description: "Something went wrong",
                variant: "destructive",
            });
        } finally {
        }
    }

    return (
        <Button onClick={onSubscribe} variant="premium">
            {
                isPro ? "Manage Subscription" : "Subscribe Now"
            }
        </Button>
    );
}

export default SubscribeButton;
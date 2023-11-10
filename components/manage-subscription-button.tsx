"use client"

import { toast } from "./ui/use-toast";
import axios from "axios";
import { Button } from "./ui/button";



const ManageSubscriptionButton = () => {

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
        <Button onClick={onSubscribe} variant="secondary">
            Manage Subscription
        </Button>
    );
}

export default ManageSubscriptionButton;
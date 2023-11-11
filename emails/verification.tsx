"use client"

import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
    Link,
    Heading
} from '@react-email/components';

import * as React from 'react';

interface VerificationTemplateProps {

    actionUrl: string
    site: string
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL
    ? `${process.env.NEXT_PUBLIC_APP_URL}`
    : '';

export const VerificationTemplate: React.FC<Readonly<VerificationTemplateProps>> = ({
    actionUrl,
    site
}) => (
    <Html>
        <Head />
        <Preview>Log in with this magic link.</Preview>
        <Body style={main}>
            <Container style={container}>
                <Img
                    src={`${baseUrl}/images/logo/logo.png`}
                    width={48}
                    height={48}
                    alt="saastherapy"
                />
                <Heading style={heading}>Welcome to Saas Therapy 👋</Heading>
                <Section style={body}>
                    <Text style={paragraph}>
                        <Link style={link} href={actionUrl}>
                            👉 Click here to sign in
                        </Link>
                    </Text>
                    <Text style={paragraph}>
                        If you didn't request this, please ignore this email.
                    </Text>
                </Section>
                <Text style={paragraph}>
                    Best,
                    <br />- Saas Therapy Team
                </Text>
                <Hr style={hr} />
                <Text style={footer}>Saas Therapy.</Text>
            </Container>
        </Body>
    </Html>
);


const main = {
    backgroundColor: '#ffffff',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '20px 25px 48px',
    backgroundImage: 'url("/assets/raycast-bg.png")',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat, no-repeat',
};

const heading = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginTop: '48px',
};

const body = {
    margin: '24px 0',
};

const paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
};

const link = {
    color: '#FF6363',
};

const hr = {
    borderColor: '#dddddd',
    marginTop: '48px',
};

const footer = {
    color: '#8898aa',
    fontSize: '12px',
    marginLeft: '4px',
};
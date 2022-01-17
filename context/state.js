/* eslint-disable react/jsx-key */
import { cloneElement } from 'react'
import { ModalContextProvider, MessageContextProvider, AuthContextProvider,AuthUserProvider, UserIdContextProvider } from '.';

function ProviderComposer({ contexts, children }) {
    return contexts.reduceRight(
        (kids, parent) =>
            cloneElement(parent, {
                children: kids
            }),
        children
    );
}

const ContextProvider = ({ children }) => {
    return (
        <ProviderComposer
            contexts={[
                <AuthContextProvider />,
                <AuthUserProvider />,
                <MessageContextProvider />,
                <ModalContextProvider />,
                <UserIdContextProvider />,
            ]}
        >
            {children}
        </ProviderComposer>
    );
}

export default ContextProvider;
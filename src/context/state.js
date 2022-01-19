import { cloneElement } from 'react'
import { ModalContextProvider, MessageContextProvider, UserIdContextProvider } from '.';

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
import { cloneElement } from 'react'
import { MessageContextProvider } from './message'
import { AuthContextProvider } from './authUser'

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
                <AuthContextProvider />,
            ]}
        >
            {children}
        </ProviderComposer>
    );
}

export default ContextProvider;
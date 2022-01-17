import { useRouter } from 'next/router'
import useAuth from '../hooks/useAuth'


export default WrappedComponent => {
    const hocComponent = ({ ...props }) => <WrappedComponent {...props} />
    const { isAuthenticated } = useAuth()
    const router = useRouter()

    hocComponent.getInitialProps = async context => {
        const user = isAuthenticated()

        if (!user){
            if (context.res){
                context.res?.writeHead(302, {
                    Location: '/login'
                });
                context.res?.end();
            }else {
                router.replace('/login')
            }
        }else if (WrappedComponent.getInitialProps){
            const wrappedProps = await WrappedComponent.getInitialProps({...context, auth: user})
            return {...wrappedProps, user}
        }

        return {user}
    }

    return hocComponent
}
import { AuthProvider } from "./auth/context/index";
import { AppRouter } from "./router/AppRouter";

export const SolarAndMortyApp = () => {
    return (
        <>
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </>
    );
}
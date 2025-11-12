import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <Box className="flex-1 bg-background-0 h-[100vh] items-center justify-center">
                <VStack space="xl" className="p-8">
                    <Text className="text-typography-900 font-bold text-3xl text-center">
                        AI Caregiver
                    </Text>
                    <Text className="text-typography-600 text-center mb-8">
                        Seleziona il tuo profilo
                    </Text>

                    <Link href="/user">
                        <Button size="xl" className="w-64">
                            <ButtonText>Accesso Utente</ButtonText>
                        </Button>
                    </Link>

                    <Link href="/caregiver">
                        <Button size="xl" className="w-64" variant="outline">
                            <ButtonText>Accesso Caregiver</ButtonText>
                        </Button>
                    </Link>
                </VStack>
            </Box>
        </main>
    );
}

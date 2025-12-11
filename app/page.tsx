import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <Box className="flex-1 bg-background-0 h-[100vh] items-center justify-center">
                <VStack space="xl" className="p-8 items-center">
                    <Image
                        src="/logo.svg"
                        alt="AI Caregiver Logo"
                        width={120}
                        height={120}
                        priority
                    />
                    <Text
                        className="font-bold text-4xl text-center"
                        style={{ color: "var(--brand-navy)" }}
                    >
                        AI Caregiver
                    </Text>
                    <Text className="text-typography-600 text-center mb-8">
                        Seleziona il tuo profilo
                    </Text>

                    <Link href="/user">
                        <Button
                            size="xl"
                            className="w-64"
                            style={{ backgroundColor: "var(--brand-red)" }}
                        >
                            <ButtonText>Accesso Utente</ButtonText>
                        </Button>
                    </Link>

                    <Link href="/caregiver">
                        <Button
                            size="xl"
                            className="w-64"
                            variant="outline"
                            style={{
                                borderColor: "var(--brand-navy)",
                                borderWidth: 2,
                            }}
                        >
                            <ButtonText
                                style={{ color: "var(--brand-navy)" }}
                            >
                                Accesso Caregiver
                            </ButtonText>
                        </Button>
                    </Link>
                </VStack>
            </Box>
        </main>
    );
}

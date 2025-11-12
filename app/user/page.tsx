"use client";

import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Card } from "@/components/ui/card";
import { Badge, BadgeText } from "@/components/ui/badge";
import { useState } from "react";

// Dati hardcoded
const promemoria = [
    {
        id: 1,
        tipo: "Medicina",
        titolo: "Cardioaspirina",
        orario: "09:00",
        preso: false,
    },
    {
        id: 2,
        tipo: "Medicina",
        titolo: "Eutirox",
        orario: "09:00",
        preso: false,
    },
    {
        id: 3,
        tipo: "Appuntamento",
        titolo: "Visita cardiologo",
        orario: "15:30",
        preso: false,
    },
];

const contatti = [
    { id: 1, nome: "Maria (Figlia)", telefono: "+39 333 1234567" },
    { id: 2, nome: "Paolo (Figlio)", telefono: "+39 340 7654321" },
    { id: 3, nome: "Assistente", telefono: "+39 345 9876543" },
];

export default function UserPage() {
    const [isListening, setIsListening] = useState(false);
    const [completati, setCompletati] = useState<number[]>([]);

    const toggleMedicina = (id: number) => {
        setCompletati((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
        );
    };

    return (
        <Box className="h-screen w-full bg-background-0 p-6">
            <VStack space="xl" className="h-full">
                {/* Header */}
                <Box className="items-center py-4">
                    <Text className="text-typography-900 font-bold text-4xl">
                        Ciao, Giuseppe
                    </Text>
                    <Text className="text-typography-600 text-xl mt-2">
                        {new Date().toLocaleDateString("it-IT", {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                        })}
                    </Text>
                </Box>

                {/* Pulsante Assistente Vocale - Grande e centrale */}
                <Card className="p-8 bg-primary-500 items-center justify-center flex-1 max-h-64">
                    <VStack space="lg" className="items-center">
                        <Button
                            size="xl"
                            className={`w-24 h-24 rounded-full ${isListening ? "bg-error-500" : "bg-white"}`}
                            onPress={() => setIsListening(!isListening)}
                        >
                            <ButtonText
                                className={`text-4xl ${isListening ? "text-white" : "text-primary-500"}`}
                            >
                                {isListening ? "🔴" : "🎤"}
                            </ButtonText>
                        </Button>
                        <Text className="text-white text-2xl font-semibold text-center">
                            {isListening
                                ? "Ti sto ascoltando..."
                                : "Tocca per parlare con l'assistente"}
                        </Text>
                    </VStack>
                </Card>

                {/* Promemoria di oggi */}
                <Box className="flex-1">
                    <Text className="text-typography-900 font-bold text-2xl mb-4">
                        Promemoria di oggi
                    </Text>
                    <VStack space="md">
                        {promemoria.map((item) => (
                            <Card
                                key={item.id}
                                className={`p-4 ${completati.includes(item.id) ? "bg-success-100" : "bg-background-50"}`}
                            >
                                <HStack className="justify-between items-center">
                                    <VStack space="xs" className="flex-1">
                                        <HStack
                                            space="sm"
                                            className="items-center"
                                        >
                                            <Badge
                                                size="sm"
                                                variant="solid"
                                                action={
                                                    item.tipo === "Medicina"
                                                        ? "info"
                                                        : "warning"
                                                }
                                            >
                                                <BadgeText>
                                                    {item.tipo}
                                                </BadgeText>
                                            </Badge>
                                            <Text className="text-typography-900 font-semibold text-xl">
                                                {item.titolo}
                                            </Text>
                                        </HStack>
                                        <Text className="text-typography-600 text-lg">
                                            Orario: {item.orario}
                                        </Text>
                                    </VStack>
                                    {item.tipo === "Medicina" && (
                                        <Button
                                            size="lg"
                                            variant={
                                                completati.includes(item.id)
                                                    ? "solid"
                                                    : "outline"
                                            }
                                            action={
                                                completati.includes(item.id)
                                                    ? "positive"
                                                    : "primary"
                                            }
                                            onPress={() =>
                                                toggleMedicina(item.id)
                                            }
                                        >
                                            <ButtonText>
                                                {completati.includes(item.id)
                                                    ? "✓ Preso"
                                                    : "Da prendere"}
                                            </ButtonText>
                                        </Button>
                                    )}
                                </HStack>
                            </Card>
                        ))}
                    </VStack>
                </Box>

                {/* Contatti rapidi e SOS */}
                <HStack space="md" className="pb-4">
                    <Button size="xl" className="flex-1 bg-success-500">
                        <ButtonText className="text-xl">
                            📞 Chiama famiglia
                        </ButtonText>
                    </Button>
                    <Button size="xl" className="flex-1 bg-error-600">
                        <ButtonText className="text-xl">🚨 SOS</ButtonText>
                    </Button>
                </HStack>
            </VStack>
        </Box>
    );
}

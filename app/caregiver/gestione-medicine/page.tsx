"use client";

import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Card } from "@/components/ui/card";
import { Badge, BadgeText } from "@/components/ui/badge";
import { Input, InputField } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

// Dati hardcoded
const medicineIniziali = [
    {
        id: 1,
        nome: "Cardioaspirina",
        dosaggio: "100mg",
        frequenza: "Due volte al giorno",
        orari: ["09:00", "21:00"],
        note: "Assumere dopo i pasti",
    },
    {
        id: 2,
        nome: "Eutirox",
        dosaggio: "75mcg",
        frequenza: "Una volta al giorno",
        orari: ["09:00"],
        note: "A stomaco vuoto, almeno 30 min prima di colazione",
    },
    {
        id: 3,
        nome: "Ramipril",
        dosaggio: "5mg",
        frequenza: "Una volta al giorno",
        orari: ["13:00"],
        note: "Controllare pressione prima dell'assunzione",
    },
];

const giorniSettimana = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];

export default function GestioneMedicinePage() {
    const [medicine, setMedicine] = useState(medicineIniziali);
    const [editandoId, setEditandoId] = useState<number | null>(null);

    return (
        <Box className="min-h-screen w-full bg-background-50 p-6">
            <VStack space="xl">
                {/* Header */}
                <HStack className="justify-between items-center">
                    <HStack space="md" className="items-start">
                        <Image
                            src="/logo.svg"
                            alt="AI Caregiver"
                            width={60}
                            height={60}
                        />
                        <VStack space="xs">
                            <Link href="/caregiver">
                                <Text
                                    className="text-sm font-medium"
                                    style={{ color: "var(--brand-red)" }}
                                >
                                    ← Torna alla dashboard
                                </Text>
                            </Link>
                            <Text
                                className="font-bold text-3xl"
                                style={{ color: "var(--brand-navy)" }}
                            >
                                Gestione Medicine e Orari
                            </Text>
                            <Text className="text-typography-600">
                                Giuseppe Rossi
                            </Text>
                        </VStack>
                    </HStack>
                    <Button
                        size="lg"
                        style={{ backgroundColor: "var(--brand-navy)" }}
                    >
                        <ButtonText>+ Aggiungi Medicina</ButtonText>
                    </Button>
                </HStack>

                {/* Lista Medicine */}
                <VStack space="lg">
                    {medicine.map((med) => (
                        <Card key={med.id} className="p-6">
                            <VStack space="md">
                                {/* Header medicina */}
                                <HStack className="justify-between items-start">
                                    <VStack space="xs" className="flex-1">
                                        <Text className="text-typography-900 font-bold text-2xl">
                                            {med.nome}
                                        </Text>
                                        <HStack space="sm">
                                            <Badge
                                                variant="solid"
                                                action="info"
                                            >
                                                <BadgeText>
                                                    {med.dosaggio}
                                                </BadgeText>
                                            </Badge>
                                            <Badge variant="outline">
                                                <BadgeText>
                                                    {med.frequenza}
                                                </BadgeText>
                                            </Badge>
                                        </HStack>
                                    </VStack>
                                    <HStack space="sm">
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onPress={() =>
                                                setEditandoId(
                                                    editandoId === med.id
                                                        ? null
                                                        : med.id,
                                                )
                                            }
                                        >
                                            <ButtonText>✏️ Modifica</ButtonText>
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            action="negative"
                                        >
                                            <ButtonText>🗑️</ButtonText>
                                        </Button>
                                    </HStack>
                                </HStack>

                                {/* Orari */}
                                <Box className="mt-4">
                                    <Text className="text-typography-800 font-semibold mb-3">
                                        Orari di assunzione
                                    </Text>
                                    <HStack space="md" className="flex-wrap">
                                        {med.orari.map((orario, idx) => (
                                            <Card
                                                key={idx}
                                                className="p-4 min-w-[100px]"
                                                style={{
                                                    backgroundColor: "#f8f9fd",
                                                }}
                                            >
                                                <Text
                                                    className="font-bold text-xl text-center"
                                                    style={{
                                                        color: "var(--brand-navy)",
                                                    }}
                                                >
                                                    {orario}
                                                </Text>
                                            </Card>
                                        ))}
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="h-auto"
                                            style={{
                                                borderColor: "var(--brand-navy)",
                                                borderWidth: 2,
                                            }}
                                        >
                                            <ButtonText
                                                style={{
                                                    color: "var(--brand-navy)",
                                                }}
                                            >
                                                + Aggiungi orario
                                            </ButtonText>
                                        </Button>
                                    </HStack>
                                </Box>

                                {/* Giorni della settimana */}
                                <Box className="mt-4">
                                    <Text className="text-typography-800 font-semibold mb-3">
                                        Giorni
                                    </Text>
                                    <HStack space="sm" className="flex-wrap">
                                        {giorniSettimana.map((giorno) => (
                                            <Badge
                                                key={giorno}
                                                size="lg"
                                                variant="solid"
                                                className="min-w-[60px]"
                                            >
                                                <BadgeText>{giorno}</BadgeText>
                                            </Badge>
                                        ))}
                                    </HStack>
                                </Box>

                                {/* Note */}
                                {med.note && (
                                    <Box className="mt-4 p-4 bg-warning-50 rounded">
                                        <Text className="text-typography-800 font-semibold mb-1">
                                            ℹ️ Note importanti
                                        </Text>
                                        <Text className="text-typography-700">
                                            {med.note}
                                        </Text>
                                    </Box>
                                )}

                                {/* Form di modifica (visibile solo se editandoId corrisponde) */}
                                {editandoId === med.id && (
                                    <Box className="mt-4 p-4 bg-background-100 rounded">
                                        <VStack space="md">
                                            <Text className="text-typography-900 font-semibold">
                                                Modifica dettagli
                                            </Text>

                                            <VStack space="xs">
                                                <Text className="text-typography-700 text-sm">
                                                    Nome medicina
                                                </Text>
                                                <Input>
                                                    <InputField
                                                        defaultValue={med.nome}
                                                    />
                                                </Input>
                                            </VStack>

                                            <HStack space="md">
                                                <VStack
                                                    space="xs"
                                                    className="flex-1"
                                                >
                                                    <Text className="text-typography-700 text-sm">
                                                        Dosaggio
                                                    </Text>
                                                    <Input>
                                                        <InputField
                                                            defaultValue={
                                                                med.dosaggio
                                                            }
                                                        />
                                                    </Input>
                                                </VStack>
                                                <VStack
                                                    space="xs"
                                                    className="flex-1"
                                                >
                                                    <Text className="text-typography-700 text-sm">
                                                        Frequenza
                                                    </Text>
                                                    <Input>
                                                        <InputField
                                                            defaultValue={
                                                                med.frequenza
                                                            }
                                                        />
                                                    </Input>
                                                </VStack>
                                            </HStack>

                                            <VStack space="xs">
                                                <Text className="text-typography-700 text-sm">
                                                    Note
                                                </Text>
                                                <Input>
                                                    <InputField
                                                        defaultValue={med.note}
                                                    />
                                                </Input>
                                            </VStack>

                                            <HStack space="md" className="mt-2">
                                                <Button
                                                    size="sm"
                                                    className="flex-1"
                                                    style={{
                                                        backgroundColor:
                                                            "var(--brand-navy)",
                                                    }}
                                                >
                                                    <ButtonText>
                                                        💾 Salva modifiche
                                                    </ButtonText>
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="flex-1"
                                                    style={{
                                                        borderColor:
                                                            "var(--brand-red)",
                                                        borderWidth: 2,
                                                    }}
                                                    onPress={() =>
                                                        setEditandoId(null)
                                                    }
                                                >
                                                    <ButtonText
                                                        style={{
                                                            color: "var(--brand-red)",
                                                        }}
                                                    >
                                                        Annulla
                                                    </ButtonText>
                                                </Button>
                                            </HStack>
                                        </VStack>
                                    </Box>
                                )}
                            </VStack>
                        </Card>
                    ))}
                </VStack>

                {/* Riepilogo settimanale */}
                <Card
                    className="p-6 border-2"
                    style={{
                        backgroundColor: "#f8f9fd",
                        borderColor: "var(--brand-navy)",
                    }}
                >
                    <Text
                        className="font-bold text-xl mb-4"
                        style={{ color: "var(--brand-navy)" }}
                    >
                        📊 Riepilogo settimanale
                    </Text>
                    <VStack space="md">
                        <HStack className="justify-between">
                            <Text className="text-typography-700">
                                Totale medicine attive:
                            </Text>
                            <Text className="text-typography-900 font-bold">
                                {medicine.length}
                            </Text>
                        </HStack>
                        <HStack className="justify-between">
                            <Text className="text-typography-700">
                                Assunzioni giornaliere:
                            </Text>
                            <Text className="text-typography-900 font-bold">
                                {medicine.reduce(
                                    (acc, m) => acc + m.orari.length,
                                    0,
                                )}
                            </Text>
                        </HStack>
                        <HStack className="justify-between">
                            <Text className="text-typography-700">
                                Promemoria attivi:
                            </Text>
                            <Text className="text-typography-900 font-bold">
                                {medicine.reduce(
                                    (acc, m) => acc + m.orari.length,
                                    0,
                                ) * 7}{" "}
                                / settimana
                            </Text>
                        </HStack>
                    </VStack>
                </Card>

                {/* Form nuova medicina (esempio) */}
                <Card
                    className="p-6 border-2"
                    style={{
                        backgroundColor: "#fff5f5",
                        borderColor: "var(--brand-red)",
                    }}
                >
                    <VStack space="md">
                        <Text
                            className="font-bold text-xl"
                            style={{ color: "var(--brand-red)" }}
                        >
                            + Aggiungi nuova medicina
                        </Text>

                        <HStack space="md" className="flex-wrap">
                            <VStack space="xs" className="flex-1 min-w-[200px]">
                                <Text className="text-typography-700 text-sm">
                                    Nome medicina
                                </Text>
                                <Input>
                                    <InputField placeholder="Es. Aspirina" />
                                </Input>
                            </VStack>

                            <VStack space="xs" className="flex-1 min-w-[150px]">
                                <Text className="text-typography-700 text-sm">
                                    Dosaggio
                                </Text>
                                <Input>
                                    <InputField placeholder="Es. 100mg" />
                                </Input>
                            </VStack>
                        </HStack>

                        <VStack space="xs">
                            <Text className="text-typography-700 text-sm">
                                Frequenza
                            </Text>
                            <Input>
                                <InputField placeholder="Es. Una volta al giorno" />
                            </Input>
                        </VStack>

                        <VStack space="xs">
                            <Text className="text-typography-700 text-sm">
                                Orari (separati da virgola)
                            </Text>
                            <Input>
                                <InputField placeholder="Es. 09:00, 21:00" />
                            </Input>
                        </VStack>

                        <VStack space="xs">
                            <Text className="text-typography-700 text-sm">
                                Note (opzionale)
                            </Text>
                            <Input>
                                <InputField placeholder="Istruzioni speciali..." />
                            </Input>
                        </VStack>

                        <Button
                            size="lg"
                            className="mt-4"
                            style={{ backgroundColor: "var(--brand-red)" }}
                        >
                            <ButtonText>💾 Salva medicina</ButtonText>
                        </Button>
                    </VStack>
                </Card>
            </VStack>
        </Box>
    );
}

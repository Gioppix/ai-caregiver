import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Button, ButtonText } from '@/components/ui/button';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Card } from '@/components/ui/card';
import { Badge, BadgeText } from '@/components/ui/badge';
import Link from 'next/link';

// Dati hardcoded
const paziente = {
  nome: 'Giuseppe Rossi',
  età: 78,
  ultimaInterazione: '2 ore fa',
};

const medicineOggi = [
  { id: 1, nome: 'Cardioaspirina', orario: '09:00', assunta: true },
  { id: 2, nome: 'Eutirox', orario: '09:00', assunta: true },
  { id: 3, nome: 'Ramipril', orario: '13:00', assunta: false },
  { id: 4, nome: 'Cardioaspirina', orario: '21:00', assunta: false },
];

const prossimiAppuntamenti = [
  { id: 1, tipo: 'Visita', descrizione: 'Cardiologo Dr. Bianchi', data: '15 Nov', ora: '15:30' },
  { id: 2, tipo: 'Analisi', descrizione: 'Prelievo sangue', data: '20 Nov', ora: '08:00' },
  { id: 3, tipo: 'Visita', descrizione: 'Controllo pressione', data: '22 Nov', ora: '10:00' },
];

const caregivers = [
  { id: 1, nome: 'Maria Rossi', ruolo: 'Figlia', disponibilità: 'Lun-Ven 18:00-22:00' },
  { id: 2, nome: 'Paolo Rossi', ruolo: 'Figlio', disponibilità: 'Weekend' },
  { id: 3, nome: 'Anna Verdi', ruolo: 'Assistente', disponibilità: 'Lun-Ven 09:00-17:00' },
];

const interazioniRecenti = [
  { id: 1, tipo: 'Promemoria', descrizione: 'Prendere medicina', quando: '2 ore fa' },
  { id: 2, tipo: 'Chat', descrizione: 'Chiesto info sul prossimo appuntamento', quando: '4 ore fa' },
  { id: 3, tipo: 'Chiamata', descrizione: 'Chiamata a Maria', quando: 'Ieri 18:30' },
];

export default function CaregiverDashboard() {
  return (
    <Box className="min-h-screen w-full bg-background-50 p-6">
      <VStack space="xl">
        {/* Header */}
        <HStack className="justify-between items-center">
          <VStack space="xs">
            <Text className="text-typography-900 font-bold text-3xl">
              Dashboard Caregiver
            </Text>
            <Text className="text-typography-600 text-lg">
              {new Date().toLocaleDateString('it-IT', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </Text>
          </VStack>
          <Link href="/caregiver/gestione-medicine">
            <Button size="lg" className="bg-primary-600">
              <ButtonText>⚙️ Gestisci Medicine</ButtonText>
            </Button>
          </Link>
        </HStack>

        {/* Info Paziente */}
        <Card className="p-6 bg-primary-50 border border-primary-200">
          <HStack className="justify-between items-center">
            <VStack space="sm">
              <Text className="text-typography-900 font-bold text-2xl">
                {paziente.nome}
              </Text>
              <Text className="text-typography-700 text-lg">
                {paziente.età} anni
              </Text>
            </VStack>
            <Badge size="lg" variant="solid" action="success">
              <BadgeText>Ultima interazione: {paziente.ultimaInterazione}</BadgeText>
            </Badge>
          </HStack>
        </Card>

        {/* Griglia principale */}
        <Box className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Medicine di oggi */}
          <Card className="p-6">
            <Text className="text-typography-900 font-bold text-xl mb-4">
              Medicine di oggi
            </Text>
            <VStack space="md">
              {medicineOggi.map((medicina) => (
                <HStack key={medicina.id} className="justify-between items-center p-3 bg-background-50 rounded">
                  <VStack space="xs">
                    <Text className="text-typography-900 font-semibold">
                      {medicina.nome}
                    </Text>
                    <Text className="text-typography-600 text-sm">
                      Orario: {medicina.orario}
                    </Text>
                  </VStack>
                  <Badge
                    variant="solid"
                    action={medicina.assunta ? 'success' : 'warning'}
                  >
                    <BadgeText>{medicina.assunta ? 'Assunta' : 'Da prendere'}</BadgeText>
                  </Badge>
                </HStack>
              ))}
            </VStack>
          </Card>

          {/* Prossimi appuntamenti */}
          <Card className="p-6">
            <Text className="text-typography-900 font-bold text-xl mb-4">
              Prossimi appuntamenti
            </Text>
            <VStack space="md">
              {prossimiAppuntamenti.map((app) => (
                <HStack key={app.id} className="justify-between items-center p-3 bg-background-50 rounded">
                  <VStack space="xs" className="flex-1">
                    <HStack space="sm" className="items-center">
                      <Badge size="sm" variant="outline" action="info">
                        <BadgeText>{app.tipo}</BadgeText>
                      </Badge>
                      <Text className="text-typography-900 font-semibold">
                        {app.descrizione}
                      </Text>
                    </HStack>
                    <Text className="text-typography-600 text-sm">
                      {app.data} alle {app.ora}
                    </Text>
                  </VStack>
                </HStack>
              ))}
            </VStack>
          </Card>

          {/* Team di caregiver */}
          <Card className="p-6">
            <Text className="text-typography-900 font-bold text-xl mb-4">
              Team di assistenza
            </Text>
            <VStack space="md">
              {caregivers.map((cg) => (
                <HStack key={cg.id} className="justify-between items-center p-3 bg-background-50 rounded">
                  <VStack space="xs">
                    <Text className="text-typography-900 font-semibold">
                      {cg.nome}
                    </Text>
                    <Text className="text-typography-600 text-sm">
                      {cg.ruolo}
                    </Text>
                  </VStack>
                  <Text className="text-typography-700 text-sm">
                    {cg.disponibilità}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Card>

          {/* Interazioni recenti */}
          <Card className="p-6">
            <Text className="text-typography-900 font-bold text-xl mb-4">
              Attività recenti
            </Text>
            <VStack space="md">
              {interazioniRecenti.map((int) => (
                <HStack key={int.id} className="justify-between items-center p-3 bg-background-50 rounded">
                  <VStack space="xs" className="flex-1">
                    <HStack space="sm" className="items-center">
                      <Badge size="sm" variant="solid">
                        <BadgeText>{int.tipo}</BadgeText>
                      </Badge>
                      <Text className="text-typography-900 font-medium">
                        {int.descrizione}
                      </Text>
                    </HStack>
                    <Text className="text-typography-600 text-sm">
                      {int.quando}
                    </Text>
                  </VStack>
                </HStack>
              ))}
            </VStack>
          </Card>
        </Box>

        {/* Azioni rapide */}
        <Card className="p-6 bg-background-100">
          <Text className="text-typography-900 font-bold text-xl mb-4">
            Azioni rapide
          </Text>
          <HStack space="md" className="flex-wrap">
            <Button size="lg" className="flex-1 min-w-[200px]">
              <ButtonText>📅 Aggiungi appuntamento</ButtonText>
            </Button>
            <Button size="lg" variant="outline" className="flex-1 min-w-[200px]">
              <ButtonText>📝 Aggiungi nota</ButtonText>
            </Button>
            <Button size="lg" variant="outline" className="flex-1 min-w-[200px]">
              <ButtonText>👥 Gestisci team</ButtonText>
            </Button>
            <Button size="lg" variant="outline" className="flex-1 min-w-[200px]">
              <ButtonText>📊 Visualizza report</ButtonText>
            </Button>
          </HStack>
        </Card>
      </VStack>
    </Box>
  );
}

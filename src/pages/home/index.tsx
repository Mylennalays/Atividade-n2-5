import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

const ListaDeTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    setTarefas([...tarefas, { titulo: novaTarefa, realizada: false }]);
    setNovaTarefa("");
  };

  const excluirTarefa = (indice) => {
    const tarefasAtualizadas = tarefas.filter((_, i) => i !== indice);
    setTarefas(tarefasAtualizadas);
  };

  const alternarRealizacao = (indice) => {
    const tarefasAtualizadas = tarefas.map((tarefa, i) =>
      i === indice ? { ...tarefa, realizada: !tarefa.realizada } : tarefa
    );
    setTarefas(tarefasAtualizadas);
  };

  return (
    <Flex
      direction="column"
      align="center"
      p={5}
      bg="white"
      color="black"
      borderRadius="md"
      boxShadow="md"
    >
      <Heading mb={4}>Lista de tarefas</Heading>
      <Flex mb={4} width="100%">
        <Input
          placeholder="Digite o título da task"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          mr={2}
        />
        <Button onClick={adicionarTarefa} colorScheme="blue">
          Inserir
        </Button>
      </Flex>
      <Stack spacing={3} width="100%">
        {tarefas.map((tarefa, indice) => (
          <Flex
            key={indice}
            justify="space-between"
            align="center"
            p={3}
            bg="gray.100"
            borderRadius="md"
          >
            <Checkbox
              isChecked={tarefa.realizada}
              onChange={() => alternarRealizacao(indice)}
            >
              <Text as={tarefa.realizada ? "del" : ""}>{tarefa.titulo}</Text>
            </Checkbox>
            <Flex>
              <Button
                colorScheme={tarefa.realizada ? "green" : "red"}
                onClick={() => alternarRealizacao(indice)}
                mr={2}
              >
                {tarefa.realizada ? "Realizada" : "Pendente"}
              </Button>
              <Button
                colorScheme="red"
                onClick={() => excluirTarefa(indice)}
              >
                Excluir
              </Button>
            </Flex>
          </Flex>
        ))}
      </Stack>
    </Flex>
  );
};

export default ListaDeTarefas;

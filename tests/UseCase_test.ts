/*
 * Copyright (c) 2024 Matthias Blomme and Dimitri Casier
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import type { UseCase } from '@domaincrafters/application/mod.ts';
import { assertEquals } from '@std/assert';

interface InputData {
  value: number;
}

// Mock implementation of UseCase
class MockUseCaseWithVoidOutput implements UseCase<InputData> {
  public executedWith: InputData | null = null;

  async execute(input: InputData): Promise<void> {
    this.executedWith = input;
  }
}

class MockUseCaseWithOutput implements UseCase<InputData, string> {
  async execute(input: InputData): Promise<string> {
    return `The value is ${input.value}`;
  }
}

Deno.test("UseCase should execute with the provided input data", async () => {
  // Arrange
  const useCase = new MockUseCaseWithVoidOutput();
  const inputData: InputData = { value: 42 };

  // Act
  await useCase.execute(inputData);

  // Assert
  assertEquals(useCase.executedWith, inputData);
});

Deno.test("UseCase should return the output data", async () => {
  // Arrange
  const useCase = new MockUseCaseWithOutput();
  const inputData: InputData = { value: 42 };

  // Act
  const output = await useCase.execute(inputData);

  // Assert
  assertEquals(output, "The value is 42");
});

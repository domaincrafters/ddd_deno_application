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
class MockUseCase implements UseCase<InputData> {
  public executedWith: InputData | null = null;

  async execute(input: InputData): Promise<void> {
    this.executedWith = input;
  }
}

Deno.test("UseCase should execute with the provided input data", async () => {
  // Arrange
  const useCase = new MockUseCase();
  const inputData: InputData = { value: 42 };

  // Act
  await useCase.execute(inputData);

  // Assert
  assertEquals(useCase.executedWith, inputData);
});

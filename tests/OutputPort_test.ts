/*
 * Copyright (c) 2024 Matthias Blomme and Dimitri Casier
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import type { OutputPort } from '@domaincrafters/application/mod.ts';
import { assertEquals } from '@std/assert';

interface OutputData {
  message: string;
}

// Mock implementation of OutputPort
class MockOutputPort implements OutputPort<OutputData> {
  public receivedOutput: OutputData | null = null;

  present(output: OutputData): void {
    this.receivedOutput = output;
  }
}

Deno.test("OutputPort should receive and store output data", () => {
  // Arrange
  const outputPort = new MockOutputPort();
  const outputData: OutputData = { message: "Test message" };

  // Act
  outputPort.present(outputData);

  // Assert
  assertEquals(outputPort.receivedOutput, outputData);
});

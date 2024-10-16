/*
 * Copyright (c) 2024 Matthias Blomme and Dimitri Casier
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * Interface representing a Use Case.
 *
 * The Use Case is responsible for executing a specific business logic
 * with the provided input data.
 *
 * @template Input - The type of the input data required to execute the use case.
 *
 * @example
 * // Example implementation of a UseCase that processes a string input.
 * class PrintUseCase implements UseCase<string> {
 *     async execute(input: string): Promise<void> {
 *         console.log(input);
 *     }
 * }
 *
 * const useCase: UseCase<string> = new PrintUseCase();
 * useCase.execute("Hello, World!"); // Outputs: Hello, World!
 */
export interface UseCase<Input> {
    execute(input: Input): Promise<void>;
}

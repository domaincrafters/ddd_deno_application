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
 * with the provided input data and returning an output.
 *
 * @template Input - The type of the input data required to execute the use case.
 * @template Output - The type of the output data returned by the use case.
 *
 * @example
 * // Example implementation of a UseCase that processes a string input.
 * class PrintUseCase implements UseCase<string, void> {
 *     async execute(input: string): Promise<void> {
 *         console.log(input);
 *     }
 * }
 *
 * const useCase: UseCase<string, void> = new PrintUseCase();
 * useCase.execute("Hello, World!"); // Outputs: Hello, World!
 */
export interface UseCase<Input, Output = void> {
    execute(input: Input): Promise<Output>;
}

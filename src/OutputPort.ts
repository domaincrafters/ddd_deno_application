/*
 * Copyright (c) 2024 Matthias Blomme and Dimitri Casier
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * Interface representing an Output Port.
 *
 * The Output Port is responsible for presenting the output data from the
 * usecase to the outside world, typically to a presenter interface.
 *
 * @template Output - The type of the output data that will be presented.
 *
 * @example Usage
 * class ConsoleOutputPort implements OutputPort<string> {
 *     present(output: string): void {
 *         console.log(output);
 *     }
 * }
 */
export interface OutputPort<Output> {
    present(output: Output): void;
}

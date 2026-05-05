/*
    pk|older|after|of|hash160|sha256|likely|address|heightwise|wsh|sh|miniscript|any|all
*/

const key_word_descriptions = {
		pk: '`pk(key)` is a policy fragment that requires a valid signature from the specified public key to spend a coin.',
        
		older: '`older(n)` function defines a relative timelock, requiring a specific amount of time or number of blocks to pass since the output was created before it can be spent.',

        after: '`after(n)` function defines an absolute timelock, stipulating that a transaction cannot be valid until a specific block height or Unix timestamp is reached.',

		of: '`of(k, n1, n2, ...)` function defines a threshold policy, requiring a minimum of *k* signatures from the provided list of public keys or sub-policies.',

		hash160: '`hash160(h)` is a spending condition that requires the spender to reveal a preimage `x` such that its `RIPEMD-160(SHA-256(x))` hash matches the specified value `h`.',

		sha256: '`sha256(h)` function defines a condition requiring the spender to provide a preimage `x` that, when hashed using the SHA-256 algorithm, equals the target hash `h`.',

		likely: '`likely` is a probability hint used within a `prob(p, ...)` policy to signal to the compiler that a specific spending path is the most expected outcome.',

		address: '`address(addr)` function allows you to use a standard Bitcoin address (such as `Bech32` or `P2PKH`) directly within a script policy.',

		heightwise: '`heightwise` is a modifier used with timelocks to force the Minsc compiler to interpret a value specifically as a block height rather than a timestamp.',

		wsh: '`wsh(policy)` wraps a policy fragment into a Witness Script Hash (P2WSH) output, ensuring the script is compatible with SegWit.',

		sh: '`sh(policy)` wraps a policy into a Script Hash (P2SH) output, which was the original way to handle complex scripts before SegWit',

		miniscript: '`miniscript(policy)` keyword in Minsc explicitly casts a given policy into its Miniscript representation, ensuring it adheres to the strict rules of the Miniscript language.',

		any: '`any(n1, n2, ...)` function in Minsc defines a disjunction, requiring that at least one of the provided sub-policies is satisfied to spend the funds.',

		all: '`all(n1, n2, ...)` function in Minsc defines a conjunction, requiring that every provided sub-policy must be satisfied simultaneously to spend the funds.',
    }

export { key_word_descriptions }
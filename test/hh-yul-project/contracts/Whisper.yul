object "Whisper" {
    code {
        // Deploy the contract
        datacopy(0, dataoffset("runtime"), datasize("runtime"))
        return(0, datasize("runtime"))        
    }

    object "runtime" {
        code {

          // fallback
          mstore(0x00, 0x20)
          mstore(0x20, 0x34)
          mstore(0x40, n1())
          mstore(0x60, n2())
          return(0x00, 0x80)

          function n1() -> n {
            n := 0x416e642069742773206f6e6c792074686520676976696e670a54686174206d61
          }

          function n2() -> n {
            n := 0x6b657320796f750a5768617420796f75206172650a0000000000000000000000
          }
        }
    }
}


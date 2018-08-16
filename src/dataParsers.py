import pdb

def parseMemory(command_output):
    mem = [int(char) for char in command_output.split() if char.isdigit()]

    mem_total = mem[0]
    mem_free = mem[1]
    mem_used = mem_total - mem_free

    mem_percent = str((mem_used/mem_total)*100)
    mem_total = str(round(mem_total / 1000, 2))
    pbd.set_trace()

    return mem_percent + '% \n' + mem_total + 'MB'
